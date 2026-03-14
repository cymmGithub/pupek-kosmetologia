import { P } from "@/components/Text";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="font-serif mb-4 text-4xl font-bold">404</h1>
        <P className="mb-4 text-xl text-muted-foreground">Strona nie została znaleziona</P>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Powrót do strony głównej
        </a>
      </div>
    </div>
  );
};

export default NotFound;
