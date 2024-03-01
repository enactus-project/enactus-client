import { PaginationMeta } from '@/common/entities';
import { PaginationMetaResponse } from '../responses/pagination-meta.response';

export const mapPaginationMetaResponseToPaginationMeta = (
  payload: PaginationMetaResponse,
): PaginationMeta => ({
  page: payload.page,
  perPage: payload.per_page,
  total: payload.total,
});
