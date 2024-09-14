import { request } from '@/common/api'; 
import { BasicMoodReponse } from '@/common/api/responses/basic-mood.response copy';

import { BasicMood } from '@/common/entities/basic-mood';

export class BasicMoodsRepository {
    async getMoods(): Promise<BasicMood[]> {
        const response = await request.get<BasicMoodReponse[]>('/mood_logs');
        
        const moods = response.data; // The array of mood objects

        console.log(moods, "MOODS");

        // Map the moods to your desired structure
        return moods
    }
    

}
