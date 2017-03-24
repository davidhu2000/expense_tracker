export const createExpense = expense => (
  $.ajax({
    method: 'POST',
    url: '/api/expenses',
    data: { expense }
  })
);

export const fetchExpense = () => (
  $.ajax({
    method: 'GET',
    url: '/api/expenses'
  })
);

export const fetchExpenses = id => (
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
