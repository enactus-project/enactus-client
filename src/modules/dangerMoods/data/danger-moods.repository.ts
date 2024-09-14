import { request } from '@/common/api'; 
import { DangerMoodReponse } from '@/common/api/responses/danger-mood.response';
import { DangerMood } from '@/common/entities/danger-mood';


export class DangerMoodsRepository {
    async getMoods(): Promise<DangerMood[]> {
        const response = await request.get<DangerMoodReponse[]>('/danger_logs');
        
        const moods = response.data; // The array of mood objects

        console.log(moods, "MOODS");

        // Map the moods to your desired structure
        return moods
    }
    

}
