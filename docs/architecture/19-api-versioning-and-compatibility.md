# 19 — API Versioning and Compatibility

Version domains are independent:

- content schema;
- content item;
- scientific model;
- exploration definition;
- visualization definition;
- internal package API where needed;
- external HTTP API;
- token format/source.

A compatible change may add optional fields or capabilities. A breaking change removes required data, changes field meaning, changes units, changes scientific output semantics, or changes required parameter behavior.

Version only consumer-visible contract changes, not ordinary implementation refactors.

Persisted configurations carry schema versions and use explicit migrations when older versions remain supported.

Scientific model version is independent from API version.

Define practical compatibility windows and deprecation periods. Writers emit the current canonical version unless policy requires otherwise.

Representative golden fixtures detect accidental semantic contract changes.
