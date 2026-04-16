#!/usr/bin/env bash
# imgup.sh — 上传图片到 GitHub，返回 Cloudflare CDN 的 Markdown 链接
# 用法: ./imgup.sh <图片路径>  或  cat img.png | ./imgup.sh

# ─── 配置区（只需改这里）───────────────────────────────
GITHUB_USER="QYue64"
GITHUB_REPO="img-hosting-2026"
GITHUB_BRANCH="main"
GITHUB_TOKEN="${GITHUB_TOKEN:-}"
# Cloudflare Workers 域名（见上一条消息的搭建方法）
CDN_BASE="https://img.mxai.eu.cc"
# 图片存储子目录（留空则放根目录）
STORE_PATH="imgs"
# ──────────────────────────────────────────────────────

set -euo pipefail

# 读取图片：支持传参 或 stdin
if [[ $# -ge 1 ]]; then
  FILE="$1"
  [[ -f "$FILE" ]] || { echo "❌ 文件不存在: $FILE"; exit 1; }
  MIME=$(file --brief --mime-type "$FILE")
  B64=$(base64 < "$FILE")
  FILENAME=$(basename "$FILE")
else
  # 从 stdin 读（配合截图工具管道使用）
  TMPFILE=$(mktemp /tmp/imgup.XXXXXX)
  cat > "$TMPFILE"
  MIME=$(file --brief --mime-type "$TMPFILE")
  B64=$(base64 < "$TMPFILE")
  # 按时间戳命名
  EXT="${MIME##*/}"
  [[ "$EXT" == "jpeg" ]] && EXT="jpg"
  FILENAME="$(date +%Y%m%d_%H%M%S).$EXT"
  rm "$TMPFILE"
fi

# 生成唯一文件名（避免覆盖）
BASENAME="${FILENAME%.*}"
EXT_ONLY="${FILENAME##*.}"
UNIQUE_NAME="${BASENAME}_$(date +%s).${EXT_ONLY}"

# 存储路径
if [[ -n "$STORE_PATH" ]]; then
  REMOTE_PATH="${STORE_PATH}/${UNIQUE_NAME}"
else
  REMOTE_PATH="${UNIQUE_NAME}"
fi

# 上传到 GitHub
API_URL="https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/contents/${REMOTE_PATH}"

RESPONSE=$(curl -sf -X PUT "$API_URL" \
  -H "Authorization: token ${GITHUB_TOKEN}" \
  -H "Content-Type: application/json" \
  -d "{
    \"message\": \"upload ${UNIQUE_NAME}\",
    \"branch\": \"${GITHUB_BRANCH}\",
    \"content\": \"${B64}\"
  }")

# 组装 CDN 链接
CDN_URL="${CDN_BASE}/${REMOTE_PATH}"
MD_LINK="![${BASENAME}](${CDN_URL})"

echo "$MD_LINK"

# 自动复制到剪贴板
if command -v pbcopy &>/dev/null; then
  echo "$MD_LINK" | pbcopy
  echo "✅ 已复制到剪贴板 (macOS)"
elif command -v xclip &>/dev/null; then
  echo "$MD_LINK" | xclip -selection clipboard
  echo "✅ 已复制到剪贴板 (Linux)"
fi