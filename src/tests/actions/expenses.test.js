import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    })
});


test('should setup edit expense action object', () => {
    const action = editExpense('g123', {note: 'new note test'});

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'g123',
        updates: {
            note:'new note test'
        }
    });
});



test('should setup add expense action object', () => {
    const expenseData = {
        description: 'Rent',
        note: 'this was last months rent ',
        createdAt: 1000,
        amount: 19029
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('should setup add expense action object', () => {
    const action = addExpense()
});