import anecdotes from './fireAnecdotes.json';
import useScrollFadeIn from '../../functions/useScrollFadeIn';

export default function Stories() {
    const isVisible = useScrollFadeIn();
    return (
        <section id="stories-section" className={`fadeIn ${isVisible ? 'active' : ''}`}>
            <h1>Anecdotes sur le Feu</h1>
            <ul>
                {anecdotes.map((anecdote, index) => (
                    <li key={index}>{anecdote}</li>
                ))}
            </ul>
        </section>
    )
}