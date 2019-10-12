import React from 'react';
import QSet from './QSet';
class ToDo extends React.Component {
    render() {
        return (
            <section className="container">
            <section className="columns is-centered">
            <div className="column is-three-fifths">

            <div className="columns is-multiline">
                {[
                    {
                        title: 'Stoichiometery',
                        description:'Cool',
                        questions: ['', '', '', '', '', '']
                    }, {
                        title: 'Energetics',
                        description:'Good',
                        questions: ['', '', '', '', '']
                    }, {
                        title: 'Atomic Structure',
                        description:'Good',
                        questions: ['', '', '',  '']
                    }, {
                        title: 'Biochemistry',
                        description:'Good',
                        questions: ['', '']
                    }
                ].map(set => 
                <div key={set.title} className="column is-12">
                    <QSet title={set.title} description={set.description} numQuestions={set.questions.length}/>

                </div>)}


            
            </div>

            </div>

            </section>
            
        </section>
    
            );
    }
}

export default ToDo;