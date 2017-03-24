export const createExpense = expense => (
  $.ajax({
    method: 'POST',
    url: '/api/expenses',
    data: { expense }
  })
);

export const fetchExpenses = () => (
  $.ajax({
    method: 'GET',
    url: '/api/expenses'
  })
);

export const fetchExpense = id => (
  $.ajax({
    method: 'GET',
    url: `/api/expenses/${id}`
  })
);

export const updateExpense = expense => (
  $.ajax({
    method: 'POST',
    url: '/api/expenses',
    data: { expense }
  })
);

export const deleteExpense = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/expenses/${id}`
  })
);
