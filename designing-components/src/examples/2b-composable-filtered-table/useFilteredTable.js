import {h, ref} from 'vue';
import Highlight from '@/components/Highlight.vue';

export function useFilteredTable(data) {
  const filteredData = ref(data);
  const search = ref('');

  function highlight(text) {
    return h(Highlight, {
      searchText: search.value,
      content: text.toString()
    })
  }

  function replaceValuesWithHighlightedOccurrences(item) {
    return Object.fromEntries(
      Object.entries(item).map(
        ([k, v]) => [k, highlight(v)]
      )
    );
  }

  function itemContainsFilter(item) {
    const searchTextInLowerCase = search.value.toLowerCase();
    return Object.values(item).some((value) => {
      const columnValueInLowerText = value.toString().toLowerCase();
      return columnValueInLowerText.includes(searchTextInLowerCase);
    });
  }

  function setFilter(text) {
    search.value = text;
    filteredData.value = data.filter(itemContainsFilter).map(replaceValuesWithHighlightedOccurrences);
  }

  return {
    filteredData,
    setFilter,
  }
}