CREATE TABLE workouts (
    workoutId INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    workoutName TEXT NOT NULL,
    userId INTEGER REFERENCES users(id)
);