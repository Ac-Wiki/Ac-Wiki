document.addEventListener('DOMContentLoaded', function() {
  const currentPath = window.location.pathname;
  
  // 解码中文字符
  let decodedPath = currentPath;
  try {
    decodedPath = decodeURIComponent(currentPath);
  } catch (e) {
    // 如果解码失败，使用原路径
    console.warn('Failed to decode path:', currentPath);
  }
  
  document.getElementById('error-path').textContent = decodedPath;
  
  const pathSegments = decodedPath.split('/').filter(segment => segment !== '');
  const searchButtonsContainer = document.getElementById('search-buttons');
  const searchSuggestionContainer = document.querySelector('.search-suggestion');
  
  let hasValidSearchTerms = false;
  const uniqueSearchTerms = new Set(); // 用于去重
  
  if (pathSegments.length > 0) {
    pathSegments.forEach(segment => {
      const cleanSegment = segment
        .replace(/\.[^/.]+$/, "")  // 移除文件扩展名
        .replace(/[-_]/g, ' ')     // 将连字符和下划线替换为空格
        .trim();
      
      if (cleanSegment && !uniqueSearchTerms.has(cleanSegment)) {
        hasValidSearchTerms = true;
        uniqueSearchTerms.add(cleanSegment); // 添加到去重集合
        
        // 对于搜索URL，仍然需要编码，但显示文本保持中文
        const searchUrl = `/?q=${encodeURIComponent(cleanSegment)}`;
        const button = document.createElement('a');
        button.href = searchUrl;
        button.className = 'md-button';
        button.textContent = `搜索 "${cleanSegment}"`; // 显示解码后的中文
        button.style.margin = '0.5rem';
        searchButtonsContainer.appendChild(button);
      }
    });
  }
  
  // 如果没有有效的搜索词，隐藏整个搜索建议区域
  if (!hasValidSearchTerms) {
    searchSuggestionContainer.style.display = 'none';
  }
});