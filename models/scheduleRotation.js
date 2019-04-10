var mongoose = require('mongoose');



var Schema = mongoose.Schema;

var ScheduleRotationSchema = new Schema(
  {
    //_id: Schema.Types.ObjectId,
    userId: {type: Schema.Types.ObjectId, ref: 'User', required: true },
    dayTemplateItems: {type: [], required: true},
    startTimeISO: {type: String, required: true}
  }, 
  { 
    collection: 'scheduleRotation' 
  }
);

//Export model
module.exports = mongoose.model('ScheduleRotation', ScheduleRotationSchema);
