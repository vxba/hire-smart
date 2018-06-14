// App Imports
import Kanban from '../model'

// Get panel by ID
export async function get(parentValue, { id }) {
  return await Kanban.findOne({ _id: id })
}

// Get by client
export async function getByClient(parentValue, { clientId }, { auth }) {
  if(auth.user && auth.user.id) {
    return await Kanban.find({
      organizationId: auth.user.organizationId,
      clientId
    })
      .populate('organizationId')
      .populate('clientId')
      .populate('candidateId')
      .populate({
        path: 'interviews',
        populate: { path: 'panelId' }
      })
  } else {
    throw new Error('Please login to view your panels.')
  }
}

// Get all
export async function getAll() {
  return await Kanban.find()
}
