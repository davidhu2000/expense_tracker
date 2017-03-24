/* globals jest */

import {
  createExpense,
  fetchExpenses,
  fetchExpense,
  updateExpense,
  deleteExpense
} from '../util/expenses_util';

describe('the api util', () => {
  beforeEach(() => {
    global.$ = require.requireMock('jquery');
    global.$.ajax = jest.fn(options => "ajax promise");
  });

  afterEach(() => {
    global.$.ajax.mockClear();
  });

  it('createExpense and returns an ajax promise', () => {
    const expense = { amount: 10, description: 'test', expense_date: '12/12/12' };
    const returnValue = createExpense(expense);
    expect($.ajax).toBeCalled();

    const ajaxCall = $.ajax.mock.calls[0][0];
    expect(ajaxCall.url).toEqual('/api/expenses');
    expect(ajaxCall.type || ajaxCall.method).toMatch(/post/i);
    expect(ajaxCall.data).toEqual({ expense });
    expect(returnValue).toEqual("ajax promise");
  });

  it('updateExpense and returns an ajax promise', () => {
    const expense = { id: 1, amount: 10, description: 'test', expense_date: '12/12/12' };
    const returnValue = updateExpense(expense);
    expect($.ajax).toBeCalled();

    const ajaxCall = $.ajax.mock.calls[0][0];
    expect(ajaxCall.url).toEqual('/api/expenses/1');
    expect(ajaxCall.type || ajaxCall.method).toMatch(/patch/i);
    expect(ajaxCall.data).toEqual({ expense });
    expect(returnValue).toEqual("ajax promise");
  });

  it('fetchExpenses and returns an ajax promise', () => {
    const returnValue = fetchExpenses();
    expect($.ajax).toBeCalled();

    const ajaxCall = $.ajax.mock.calls[0][0];
    expect(ajaxCall.url).toEqual('/api/expenses');
    expect(ajaxCall.type || ajaxCall.method).toMatch(/get/i);
    expect(returnValue).toEqual("ajax promise");
  });

  it('fetchExpense and returns an ajax promise', () => {
    const returnValue = fetchExpense(1);
    expect($.ajax).toBeCalled();

    const ajaxCall = $.ajax.mock.calls[0][0];
    expect(ajaxCall.url).toEqual('/api/expenses/1');
    expect(ajaxCall.type || ajaxCall.method).toMatch(/get/i);
    expect(returnValue).toEqual("ajax promise");
  });

  it('deleteExpense and returns an ajax promise', () => {
    const returnValue = deleteExpense(1);
    expect($.ajax).toBeCalled();

    const ajaxCall = $.ajax.mock.calls[0][0];
    expect(ajaxCall.url).toEqual('/api/expenses/1');
    expect(ajaxCall.type || ajaxCall.method).toMatch(/delete/i);
    expect(returnValue).toEqual("ajax promise");
  });

});
