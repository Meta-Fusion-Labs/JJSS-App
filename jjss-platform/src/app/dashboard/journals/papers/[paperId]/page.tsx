


interface PaperPageProps {
  params: { paperId: string };
}

export default function PaperPage({ params }: PaperPageProps) {
  return (
    <div>
      <h1>Paper ID: {params.paperId}</h1>
      <p>This will be the detail view for an individual paper.</p>
    </div>
  );
}

