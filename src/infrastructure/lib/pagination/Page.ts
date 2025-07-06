export interface Page<T> {
  data: Array<T>;
  total_elements: number;
  total_pages: number;
  page_size: number;
}

