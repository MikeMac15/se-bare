document.addEventListener("DOMContentLoaded", function() {
    const titleList = ['Tutoring', 
    'Proctored Testing',
    'Study Skills',
    'Workshops',
    'Credit Retrieval',
    'GED Classes']
    const descrList = ["Some students may just need help with the schoolwork that they are currently working on in school. Most rural schools have very few, if any, tutoring programs in the school. Although there are online resources, many students that are already struggling have a hard time learning without in-person help.", 
    "We offer proctored testing services to ensure fairness and authenticity in assessments. Whether you're a student needing a monitored environment for exams or an organization requiring professional oversight for certifications, our experienced staff ensures a comfortable, controlled, and trustworthy testing experience.",
    'Students may need help getting organized, using their time wisely and learning how to study more effectively. We will offer workshops that families can tap into with ongoing support to make sure their student is successful.',
    'We will also have workshops for families that need help with FAFSA, college applications and essay writing.',
    'Many high school students have found themselves shy of credits for graduation by their Senior year. Soaring Eagle Educational Center will team up with accredited organizations to help students make up credits at their own pace.',
    "Our comprehensive curriculum, personalized instruction, and supportive learning environment empower students to master the skills needed to pass the GED exam with confidence. Whether you're aiming to enhance your employment prospects or pursue further education, our dedicated instructors are here to guide you every step of the way. Join us and take the first step towards a brighter future with our GED program."]

    const imgSrcList = ['/public/servicePictures/newTutor.png', '/public/servicePictures/testing.svg', '/public/servicePictures/credit.svg', '/public/servicePictures/workshops.svg', '/public/servicePictures/ged.svg', '/public/servicePictures/gedNew.svg'];

    const servDiv = document.getElementById('servDiv');

    titleList.forEach((title, index) => {
        const service = document.createElement('div');
        service.classList.add('service');

        const serviceInfo = document.createElement('div');
        serviceInfo.classList.add('serviceInfo');

        const titles = document.createElement('h3');
        titles.classList.add('titles');
        titles.textContent = titleList[index]

        const description = document.createElement('p');
        description.classList.add('description');
        description.textContent = descrList[index];

        const serviceImage = document.createElement('img');
        serviceImage.classList.add('service-image');
        serviceImage.src = imgSrcList[index];

        serviceInfo.appendChild(titles);
        serviceInfo.appendChild(description);
        service.appendChild(serviceInfo);
        service.appendChild(serviceImage);
        servDiv.appendChild(service);
    });

    // GSAP animations can be implemented here if needed
});
