export interface Student {
    id: string;
    name: string | null;
    surname: string;
    state: number;
    academic?: number;
    is_absent?: boolean;
    date?: string;
    grade: string;
    description: string;
    created_at: string;
    updatedAt: string;
    deletedAt: string | null;
}

export interface StudentData{
    studentId: string
    academic?: number;
    is_absent?: boolean;
    date: string;
    grade: string; reason_for_absent?: string 
}
  