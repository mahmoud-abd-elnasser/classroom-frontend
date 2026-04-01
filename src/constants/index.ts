export const DEPARTMENTS = ['CS', 'Math', 'English']
export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((department) => ({
    value: department,
    label: department
}))

export const MOCK_SUBJECTS = [
    {
        id: 1,
        name: "Introduction to Computer Science",
        code: "CS101",
        description: "An introductory course on computer science concepts.",
        department: "CS",
        created_at: "2024-01-01T00:00:00.000Z"
    },
    {
        id: 2,
        name: "Data Structures and Algorithms",
        code: "CS201",
        description: "Study of common data structures and algorithms.",
        department: "CS",
        created_at: "2024-01-05T00:00:00.000Z"
    },
    {
        id: 3,
        name: "Calculus I",
        code: "MATH101",
        description: "Introduction to differential and integral calculus.",
        department: "Math",
        created_at: "2024-01-10T00:00:00.000Z"
    },
    {
        id: 4,
        name: "Linear Algebra",
        code: "MATH201",
        description: "Study of systems of linear equations and matrices.",
        department: "Math",
        created_at: "2024-01-15T00:00:00.000Z"
    },
    {
        id: 5,
        name: "English Literature",
        code: "ENG101",
        description: "Introduction to major works of English literature.",
        department: "English",
        created_at: "2024-01-20T00:00:00.000Z"
    }
]