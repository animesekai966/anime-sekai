import { StaffService } from './staff.service';
import { CreateStaffInput } from './dto/create-staff.input';
import { UpdateStaffInput } from './dto/update-staff.input';
export declare class StaffResolver {
    private readonly staffService;
    constructor(staffService: StaffService);
    createStaff(createStaffInput: CreateStaffInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateStaff(updateStaffInput: UpdateStaffInput): string;
    removeStaff(id: number): string;
}
