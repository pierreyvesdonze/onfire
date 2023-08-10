import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import texts from './texts.json';
import useScrollFadeIn from '../../functions/useScrollFadeIn';

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const isVisible = useScrollFadeIn();
    
    return (
        <section id="make-fire-section" className={`fadeIn ${isVisible ? 'active' : ''}`}>
            <h1>Faire du feu</h1>
            <div>
                <Accordion
                    expanded={expanded === 'panel1'}
                    onChange={handleChange('panel1')}
                    sx={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>{texts.title1}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {texts.text1}
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion
                    expanded={expanded === 'panel2'}
                    onChange={handleChange('panel2')}
                    sx={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>{texts.title2}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {texts.text2}
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion
                    expanded={expanded === 'panel3'}
                    onChange={handleChange('panel3')}
                    sx={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>{texts.title3}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {texts.text3}
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion
                    expanded={expanded === 'panel4'}
                    onChange={handleChange('panel4')}
                    sx={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>{texts.title4}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {texts.text4}
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion
                    expanded={expanded === 'panel5'}
                    onChange={handleChange('panel5')}
                    sx={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel5bh-content"
                        id="panel5bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>{texts.title5}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {texts.text5}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </section>
    );
}