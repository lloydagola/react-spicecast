import event from "../models/event";

function getEvents() {
  try {
    return event.find();
  } catch (error) {
    console.log("An error ocurred while attempting to fetch the events", error);
  }
}
function getEvent({ params: { id } }: any) {
  try {
    return event.findById(id);
  } catch (error) {
    console.log("An error ocurred while attempting to fetch the event", error);
  }
}
function postEvent({ body: { title, genres, thumbnail, description } }: any) {
  try {
    const newEvent = new event({ title, genres, thumbnail, description });
    return newEvent.save();
  } catch (error) {
    console.log("An error ocurred while attempting to save the event", error);
  }
}
function updateEvent({ params: { id }, body: { attribute, value } }: any) {
  try {
    return event.findByIdAndUpdate(id, { [attribute]: value });
  } catch (error) {
    console.log("An error ocurred while attempting to update the event", error);
  }
}
function deleteEvent({ params: { id } }: any) {
  try {
    return event.findByIdAndDelete(id);
  } catch (error) {
    console.log("An error ocurred while attempting to delete the event", error);
  }
}

export default Object.freeze({
  getEvents,
  getEvent,
  postEvent,
  updateEvent,
  deleteEvent,
});
