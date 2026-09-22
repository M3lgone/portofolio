import Container from "./Container";

export default function Section({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="py-20 md:py-28">
      <Container>
        {children}
      </Container>
    </section>
  );
}