const parseHtmlToText = (html) => {
  if (!html) return '';

  let text = html;

  text = text.replace(/&nbsp;/g, ' ');
  text = text.replace(/&amp;/g, '&');
  text = text.replace(/&lt;/g, '<');
  text = text.replace(/&gt;/g, '>');
  text = text.replace(/&quot;/g, '"');
  text = text.replace(/&#39;/g, "'");

  text = text.replace(/<li[^>]*>/gi, '\n• ');
  text = text.replace(/<\/li>/gi, '');

  let olCounter = 1;
  text = text.replace(/<ol[^>]*>(.*?)<\/ol>/gis, (match, content) => {
    olCounter = 1;
    return content.replace(/<li[^>]*>/gi, () => `\n${olCounter++}. `);
  });

  text = text.replace(/<\/?ul[^>]*>/gi, '\n');
  text = text.replace(/<\/?ol[^>]*>/gi, '\n');

  text = text.replace(/<br\s*\/?>/gi, '\n');
  text = text.replace(/<\/p>/gi, '\n\n');
  text = text.replace(/<p[^>]*>/gi, '');

  text = text.replace(/<[^>]*>/g, '');

  text = text.replace(/\n\s*\n\s*\n/g, '\n\n');
  text = text.trim();

  return text;
};

export default parseHtmlToText;
