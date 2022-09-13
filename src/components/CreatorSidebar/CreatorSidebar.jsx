import "./creator-sidebar.scss";

function CreatorSidebar({ sidebarContent, activeId }) {
  const styleLink = (href, index) => {
    return `creator-sidebar__link ${
      href === activeId || (activeId === "" && index === 0)
        ? "creator-sidebar__link_active"
        : ""
    }`;
  };

  const handleLinkClick = (e, el) => {
    e.preventDefault();
    document.getElementById(el.href).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <ul className="creator-sidebar">
      {sidebarContent.map((el, index) => {
        return (
          <li key={`menu-item-${el.href}`} className="creator-sidebar__item">
            <a
              href={`#${el.href}`}
              onClick={(e) => handleLinkClick(e, el)}
              className={styleLink(el.href, index)}
            >
              {el.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default CreatorSidebar;
