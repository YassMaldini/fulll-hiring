import { useContext, useMemo } from "react"
import { FlatList } from "react-native"
import { MainScreenContext } from "../MainScreen.context"
import MainContentUserCard from "./MainContentUserCard/MainContentUserCard";
import MainContentHeader from "./MainContentHeader/MainContentHeader";
import Empty from "../../../commons/Empty/Empty";
import { getTotalPages } from "../../../../utils/api/getTotalPages";
import { DEFAULT_ITEMS_PER_PAGE, IS_INFINITE_SCROLL_ENABLED } from "../MainScreen";

export default () => {

  const { searchResult, searchParams, setSearchParams } = useContext(MainScreenContext)

  return (
    <FlatList
      data={searchResult?.items}
      keyExtractor={({ node_id }, index) => node_id + index}
      renderItem={({ item, index }) => {
        return (
          <MainContentUserCard key={index} user={item} />
        )
      }}
      ListHeaderComponent={<MainContentHeader />}
      ListEmptyComponent={<Empty text={searchResult ? 'No result' : 'Search Github users'} />}
      showsVerticalScrollIndicator={false}
      // infinite scroll
      onEndReached={() => {
        if (IS_INFINITE_SCROLL_ENABLED && searchResult) {
          const pagesCount = getTotalPages(searchResult?.total_count, searchParams.perPage || DEFAULT_ITEMS_PER_PAGE)
          if (pagesCount > 1) {
            setSearchParams({
              page: searchParams.page,
              perPage: (searchParams.perPage || DEFAULT_ITEMS_PER_PAGE) + 10
            })
          }
        }
      }}
    />
  )
}