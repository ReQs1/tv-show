import EpisodesAccordion from "./EpisodesAccordion";

function EpisodesComponent({ data }: any) {
  return (
    <section className="my-16">
      <EpisodesAccordion
        title="Season 1"
        data={data["season/1"].episodes}
        vartiant="md"
        defaultValue={true}
      />
      {data["season/2"] && (
        <EpisodesAccordion
          title="Season 2"
          data={data["season/2"].episodes}
          vartiant="md"
          defaultValue={false}
        />
      )}
      {data["season/3"] && (
        <EpisodesAccordion
          title="Season 3"
          data={data["season/3"].episodes}
          vartiant="md"
          defaultValue={false}
        />
      )}
    </section>
  );
}

export default EpisodesComponent;
