import './index.css'  
import Accordion from '@mui/material/Accordion';

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; 
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Sidebar=()=><div className='sidebarLayout'> 
<input type="checkbox" id="first"/>  
<label htmlFor='first' className='custom'>CUSTOMIZBLE</label> 
<div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h3 className='custom'>IDEAL FOR</h3>
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
      <FormControlLabel control={<Checkbox />} label="MEN" />
      <FormControlLabel  control={<Checkbox />} label="WOMEN" />
      <FormControlLabel  control={<Checkbox />} label="BOYS&KIDS" />
    </FormGroup>
        </AccordionDetails>
      </Accordion> 
      <hr/>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <h3 className='custom'>OCCASION</h3>
        </AccordionSummary>
        <AccordionDetails>
          ALL
        </AccordionDetails>
      </Accordion> 
      <hr/>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <h3 className='custom'>WORK</h3>
        </AccordionSummary>
        <AccordionDetails>
          All
        </AccordionDetails>
        
      </Accordion> 
      <hr/>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <h3 className='custom'>WORK</h3>
        </AccordionSummary>
        <AccordionDetails>
          ALL
        </AccordionDetails>
      </Accordion>  
      <hr/> 
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <h3 className='custom'>FABRIC</h3>
        </AccordionSummary>
        <AccordionDetails>
          ALL
        </AccordionDetails>
      </Accordion>  
      <hr/> 
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <h3 className='custom'>SEGMENT</h3>
        </AccordionSummary>
        <AccordionDetails>
          ALL
        </AccordionDetails>
      </Accordion> 
      <hr/> 
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <h3 className='custom'>SUITABLE FOR</h3>
        </AccordionSummary>
        <AccordionDetails>
          ALL
        </AccordionDetails>
      </Accordion>  
      <hr/>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <h3 className='custom'>RAW MATERIAL</h3>
        </AccordionSummary>
        <AccordionDetails>
          ALL
        </AccordionDetails>
      </Accordion> 
    </div>
    
</div> 

export default Sidebar