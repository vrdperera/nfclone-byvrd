export default function selectionFilter({ series, films }) {
  return {
    series: [
      {
        title: 'Documentries',
        data: series.filter((item) => item.genre === 'documentires'),
      },
      {
        title: 'Comedies',
        data: series.filter((item) => item.genre === 'comedies'),
      },
      {
        title: 'Children',
        data: series.filter((item) => item.genre === 'children'),
      },
      {
        title: 'Crime',
        data: series.filter((item) => item.genre === 'crime'),
      },
      {
        title: 'Feel Good',
        data: series.filter((item) => item.genre === 'feel-good'),
      },
    ],
    films: [
      {
        title: 'Drama',
        data: films.filter((film) => film.genre === 'drama'),
      },
      {
        title: 'Thriller',
        data: films.filter((film) => film.genre === 'thriller'),
      },
      {
        title: 'Children',
        data: films.filter((film) => film.genre === 'children'),
      },
      {
        title: 'Suspense',
        data: films.filter((film) => film.genre === 'suspense'),
      },
      {
        title: 'Romance',
        data: films.filter((film) => film.genre === 'romance'),
      },
    ],
  };
}
