function replaceNoticeWithBlankLines() {
      const root = document.querySelector('#LNReader-chapter');
      if (!root) return;

      const target = 'If you find any errors ( broken links, non-standard content, etc.. ), Please let us know < report chapter > so we can fix it as soon as possible';
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);

      while (walker.nextNode()) {
            const node = walker.currentNode;
            const text = (node.nodeValue || '').replace(/s+/g, ' ').trim();

            if (text.includes('If you find any errors') || text.includes('report chapter')) {
                  const br1 = document.createElement('br');
                  const br2 = document.createElement('br');
                  const br3 = document.createElement('br');
                  const br4 = document.createElement('br');
                  const br5 = document.createElement('br');
                  node.parentNode.insertBefore(br1, node);
                  node.parentNode.insertBefore(br2, node);
                  node.parentNode.insertBefore(br3, node);
                  node.parentNode.insertBefore(br4, node);
                  node.parentNode.insertBefore(br5, node);
                  node.parentNode.removeChild(node);
            }
      }             
}

replaceNoticeWithBlankLines();

new MutationObserver(replaceNoticeWithBlankLines).observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
});