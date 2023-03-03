import { parseISO, format } from 'date-fns';
import { fr } from 'date-fns/locale/index.js'
import { useSanityClient, createImageBuilder} from 'astro-sanity';

const builder = createImageBuilder(useSanityClient());

export function formatBlogPostDate(date) {
  const dateString = parseISO(date, 'YYYY/MM/Do');
  const formattedDateString = format(dateString, 'PPP', {locale:fr});
  return `${formattedDateString}`;
}
export function formatEventDate(date) {
  const dateString = parseISO(date, 'YYYY/MM/Do');
  const formattedDateString = format(dateString, 'PPPp', {locale:fr});
  return `${formattedDateString}`;
}

export function formatLongEventDate(date) {
  const dateString = parseISO(date, 'YYYY/MM/Do');
  const formattedDateString = format(dateString, 'PPP', {locale:fr});
  return `${formattedDateString}`;
}
export function getSanityImageURL(source) {
  return builder.image(source);
}