import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Dispatch, SetStateAction } from 'react';

export default function PaginationComponent(props: {
  page: number;
  setPage: Dispatch<SetStateAction<any>>;
  totalPages: number;
}) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={(e) => {
              e.preventDefault();
              if (props.page > 1) {
                props.setPage(props.page - 1);
              }
            }}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>{props.page}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            onClick={(e) => {
              e.preventDefault();
              if (props.page < props.totalPages) {
                props.setPage(props.page + 1);
              }
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
