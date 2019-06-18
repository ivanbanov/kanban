import { Record } from 'immutable';

const TaskRecordClass = Record({
  id: null,
  status: null,
  text: null,
});

export class TaskRecord extends TaskRecordClass {}
