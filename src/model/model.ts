export default class Model {
  constructor() {}

  createFormData(event: Event) {
    const formData = new FormData(event.target as HTMLFormElement);
    const query = formData.get("search");
    return query;
  }

  async createRequest(query: string) {
    const answer = await fetch(
      `https://api.unsplash.com/search/photos/?client_id=nfz6uqutkSaOK5zHC7NQXLwql2V5WyQY7kiZrjMjIB4&page=1&per_page=16&query=${query}`,
    );
    const data = await answer.json();
    return data;
  }
}
