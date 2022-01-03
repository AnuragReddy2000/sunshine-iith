import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logo128 from '../images/icon_x128.png';
import '../components/css/teams1.css';


  function MuiAcc ({question, answer}) {
      return (
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            {question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx = {{color: '#808080'}}>
            {answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
      )
  }


export default function SimpleAccordion() {
  return (
    <div style = {{width: "80%", marginLeft: '10%', marginRight: '10%', marginTop: '5%'}}>
      {/* <img src = {logo128} alt = 'logo' className='logo'/> */}
      <Typography variant = 'h4' sx = {{color: "#f2ba49", marginBottom: '20px'}}>Frequently Asked Questions</Typography>
      <div className='accordion'>
        <MuiAcc
            question = 'What is counselling ?'
            answer = "Counselling is not the same as giving advice. It is quite different from the general opinion held by people. Going for a counselling session in no way indicates that you are helpless or incapable of solving your problems. By talking about your problems or concerns with a counsellor you will deepen your understanding of your problem and develop the means to deal with them."
        />
        <MuiAcc
            question = 'What kind of problems can I talk to counsellor about ?'
            answer = "You can pretty much talk with us about anything and everything.You can come to us for personal problems, academic problems, emotional issues and career awareness. These may include stress related problems, exam anxiety, personal problems, peer pressure, substance abuse, lack of focus in academics, laziness, time management, inability to concentrate and career related queries."
        />
        <MuiAcc
            question = 'How do I present my issues ?'
            answer = "It doesn't really matter how you present your problem.You can say whatever you like. Sometimes there is silence, sometimes you might find yourself saying things you had not expected to say. The counsellor will help you explore the matter and will keep referring to you to clarify his/her understanding."
        />
        <MuiAcc
            question = 'What will the counsellor think of me - will they think badly of me ?'
            answer = "First of all, we are not here to judge your actions. And secondly, Many of our problems arise just because we are human.We all make mistakes and have to learn from them, and it is normal to need several goes before we get something right. When something goes wrong, it is usually because you are pushing ourselves too hard; because you are in a muddle for reasons you don't fully understand or because you are actually are suffering some form of mental distress which is distorting your view of reality. Therefore judging is not helpful or relevant; what we will do is help and support you along your way in finding the best way out of the problem."
        />
        <MuiAcc
            question = 'What if I still feel ashamed of my problems ?'
            answer = "Counsellors do accept that it is natural to want to appear successful and that most of us feel some shame when we have problems and so don't want to advertise our difficulties. This is one of the reasons we place a great emphasis on confidentiality."
        />
        <MuiAcc
            question = 'How confidential is counselling ?'
            answer = "Sunshine recognizes the importance of confidentiality for students using its services. Maintaining trust and privacy is a legitimate expectation from the students’ perspective. We at Sunshine assure you of strict and complete confidentiality of whatever you discuss with us. Whatever problems and memories you bring in the room with you, get resolved and deleted respectively, the moment you leave the room. You will be filled with only one thing and that is TRUST in sunshine. HAVE COURAGE! IT IS, AND WILL REMAIN CONFIDENTIAL."
        />
        <MuiAcc
            question = 'How confidential is counselling ?'
            answer = "Strict confidentiality is ensured in the Counselling Service."
        />
        <MuiAcc
            question = 'If I have had counselling, does it go on my record ?'
            answer = "If a student approaches Counselling Service, nothing about it will go on his record."
        />
        <MuiAcc
            question = 'Can I seek advice regarding a friend or colleague ?'
            answer = "If you want to approach us regarding a friend, you are most welcome. We'll try our best to help you help your friend, while still helping you to stay anonynomous."
        />
      </div>
    </div>
  );
}
