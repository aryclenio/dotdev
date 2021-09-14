import PrismicDOM from "prismic-dom";
import Prism from "prismjs";
const Elements = PrismicDOM.RichText.Elements;

export const htmlSerializer = function (type, element, content, children) {
  switch (type) {
    case Elements.heading1:
      return `<h1>${children.join("")}</h1>`;
    case Elements.heading2:
      return `<h2>${children.join("")}</h2>`;
    case Elements.heading3:
      return `<h3>${children.join("")}</h3>`;
    case Elements.heading4:
      return `<h4>${children.join("")}</h4>`;
    case Elements.heading5:
      return `<h5>${children.join("")}</h5>`;
    case Elements.heading6:
      return `<h6>${children.join("")}</h6>`;
    case Elements.paragraph:
      return `<p>${children.join("")}</p>`;
    case Elements.preformatted:
      return `<pre class="language-javascript"><code class="language-javascript">${children
        .join("")
        .split("<br />")
        .join("\n")}</code></pre>`;

    case Elements.strong:
      return `<strong>${children.join("")}</strong>`;
    case Elements.em:
      return `<em>${children.join("")}</em>`;
    case Elements.listItem:
      return `<li>${children.join("")}</li>`;
    case Elements.oListItem:
      return `<li>${children.join("")}</li>`;
    case Elements.list:
      return `<ul>${children.join("")}</ul>`;
    case Elements.oList:
      return `<ol>${children.join("")}</ol>`;
    default:
      return null;
  }
};

export const linkResolver = function (doc) {
  // Pretty URLs for known types
  if (doc.type === "blog") return "/post/" + doc.uid;
  if (doc.type === "page") return "/" + doc.uid;
  // Fallback for other types, in case new custom types get created
  return "/doc/" + doc.id;
};
