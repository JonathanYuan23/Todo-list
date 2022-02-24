const Task = (title, description, dueDate, priority, notes, checklist) => {
    const getTitle = () => title;
    const updateTitle = (newTitle) => (title = newTitle);

    const getDescription = () => description;
    const updateDescription = (newDescription) => (description = newDescription);

    const getDueDate = () => dueDate;
    const updateDueDate = (newDate) => (dueDate = newDate);

    const getPriority = () => priority;
    const updatePriority = (newPriority) => (priority = newPriority);

    const getNotes = () => notes;
    const updateNotes = (newNotes) => (notes = newNotes);

    const getChecklist = () => checklist;
    const updateChecklist = (newChecklist) => (checklist = newChecklist);

    return {
        getTitle,
        updateTitle,
        getDescription,
        updateDescription,
        getDueDate,
        updateDueDate,
        getPriority,
        updatePriority,
        getNotes,
        updateNotes,
        getChecklist,
        updateChecklist,
    };
};

export { Task };
