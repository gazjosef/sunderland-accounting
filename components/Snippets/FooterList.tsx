interface FooterListProps {
  links: string[];
}
export default function FooterList({ links }: FooterListProps) {
  return (
    <div className="footer__links | u-margin-bottom-small">
      <ul role="list">
        {links.map((link) => (
          <li>{link}</li>
        ))}
      </ul>
    </div>
  );
}
