import { PaginationContainer } from "./Pagination.styles";

export const Pagination = ({
  pageInfo,
  onPageChange,
}: {
  pageInfo: {
    current_page: number;
    last_page: number;
    per_page: number;
    total_videos: number;
  };
  onPageChange: ({ selected }: { selected: number }) => void;
}) => {
  return (
    <PaginationContainer
      breakLabel="..."
      nextLabel=">"
      onClick={(data) =>
        onPageChange({ selected: (data.nextSelectedPage || 0) + 1 })
      }
      forcePage={pageInfo?.current_page - 1}
      pageRangeDisplayed={5}
      pageCount={Number(pageInfo?.last_page || 0)}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};
