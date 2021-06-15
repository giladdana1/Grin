import { NamePage, EmailPage, DateOfBirthPage, DoctorLocationPage, SmileTypePage, SeverityLevelPage, SelectDoctorPage } from '../../page-objects';
import { knownUser } from '../../data';



before(() => {
    // runs once before all tests in the block
    cy.clearCookies()
  })

const namePage = new NamePage();
const emailPage = new EmailPage();
const dateOfBirthPage = new DateOfBirthPage();
const doctorLocationPage = new DoctorLocationPage();
const smileTypePage = new SmileTypePage();
const severityLevelPage = new SeverityLevelPage();
const selectDoctorPage = new SelectDoctorPage();
describe('EndToEnd test',()=>{
    it('tests known user end to end flow',()=>{
        //cy.visit('https://qa-test.d1cl3ctepbvcvq.amplifyapp.com/');
        cy
            .visit(namePage.url)
            .get(namePage.nameField).clear()
            .get(namePage.lastNameField).clear()
            .get(namePage.nameField).type(knownUser.firstName)
            .get(namePage.lastNameField).type(knownUser.lastName)
            .get(namePage.nextButton).click()
            .get(emailPage.emailField).clear()
            .get(emailPage.emailField).type(knownUser.email)
            .get(emailPage.nextButton).click()
            .get(dateOfBirthPage.dateOfBirthField).click()
            .get(dateOfBirthPage.years).scrollTo(0, 2950).click()
            //.reload()
            .get(dateOfBirthPage.april).click()
            .get(dateOfBirthPage.twentyNineth).click()
            .get(dateOfBirthPage.ok).click()
            .get(dateOfBirthPage.nextButton).click()
            .get(doctorLocationPage.zipCodeField).clear()
            .get(doctorLocationPage.zipCodeField).type(knownUser.doctorLocation)
            .get(doctorLocationPage.nextButton).click()
            .get(smileTypePage.crowding).click()
            .get(smileTypePage.nextButton).click()
            .get(severityLevelPage.mild).click()
            .get(severityLevelPage.nextButton).click()
            .get(selectDoctorPage.doctor).click()
            .get(selectDoctorPage.nextButton).click();
    })
})
