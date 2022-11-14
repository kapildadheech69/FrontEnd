import { TestBed } from "@angular/core/testing";
import { ConfigService } from "./config.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { findMemberById } from "src/moqdata/memberAndClaimData";

describe('ConfigServece', () => {
    let configService: ConfigService,
        httpTestingController: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                ConfigService,
                HttpClientTestingModule
            ]
        }); 
        configService = TestBed.inject(ConfigService),
        httpTestingController = TestBed.inject(HttpTestingController); 
    });

    it('Should find a member by id', () => {
        configService.getMemberByMemberId(2).subscribe(member => {
            expect(member).toBeTruthy()

            expect(member.memberId).toBe(2)
        })
        const req = httpTestingController.expectOne('https://localhost:44325/HealthCare/ByMemberId/2')
        expect(req.request.method).toEqual("GET")
        req.flush({payload: findMemberById(2)})
    });
});