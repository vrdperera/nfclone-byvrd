import BrowseContainer from '../containers/browseContainer';
import { useContent } from '../hooks';
import selectionFilter from '../utills/section-filter';

export default function Browse() {
  const { series } = useContent('series');
  const { films } = useContent('films');

  const slides = selectionFilter({ series, films });

  return <BrowseContainer slides={slides} />;
}
