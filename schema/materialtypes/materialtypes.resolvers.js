import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const resolvers = {
  Query: {
    getAllMaterialTypes: async () => {
      try {
        const getMaterialTypes = await supabase.from('materialtypes').select('*').order('code', { ascending: true })
        console.log(getMaterialTypes)
        return getMaterialTypes.body;
      } catch (error) {
        throw error
      }
    }
  },
  Mutation: {
    getNearestCollectionSpots: async (_, { currentUserLocation, currentChosenMaterialTypes }) => {
      try {
        const findNearestCollectionSpots = await supabase
        .rpc('find_nearest_collectionspots', { currentUserLocation: currentUserLocation, currentMaterialTypes: currentChosenMaterialTypes });
        return findNearestCollectionSpots.body;
      } catch (error) {
        throw error
      }
    }
  }
};

export default resolvers;