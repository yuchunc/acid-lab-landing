import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${style} ${icon}`} target="_blank">
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="copyright">
        <li>&copy; Acid Lab 岸汐職人聚落</li>
        <li>
          Maintain By: <a href="http://rustyfinger.com">Mickey Chen</a>
        </li>
      </ul>
    </footer>
  );
}
