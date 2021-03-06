import moxios from "moxios";

import { getSecretWord } from "./hookActions";

describe("moxios test", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test("calls the getSecretWord callback on axios response", async () => {
    const secretWord = "party";

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    const mockSetSecretWord = jest.fn();

    await getSecretWord(mockSetSecretWord);

    // see wheter mock was run with the correct argument
    expect(mockSetSecretWord).toHaveBeenCalledWith(secretWord);
  });
});
