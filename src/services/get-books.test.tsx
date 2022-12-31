import store from "../store/store";
import { getBooks } from "./get-books";
import sampleResponse from "./sampleResponse";

const mockResponse = (status: number, statusText: string | undefined, response: any) => {
  return new window.Response(response, {
    status: status,
    statusText: statusText,
    headers: {
      'Content-type': 'application/json'
    }
  });
};


describe('get-books test', () => {

  test('getBooks request works fine', async () => {

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve(mockResponse(200, undefined, sampleResponse)));

    await store.dispatch(getBooks())

    const state = store.getState();

    expect(state.books.books.length).toEqual(1);
    expect(state.books.columns.length).toEqual(3);
    expect(state.books.columns[0].bookIds.length).toEqual(1);
  });

});