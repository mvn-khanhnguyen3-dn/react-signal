import { useState } from 'react';
import BatchSignal from './BatchSignal';
import ComputedSignal from './ComputedSignal';
import CounterWithSignal from './Counter/CounterWithSignal';
// import CounterWithState from './Counter/CounterWithState';
import GetCountData from './Counter/GetCountData';
import CreateSignal from './CreateSignal';
import EffectSignal from './Effect/EffectSignal';
import EffectState from './Effect/EffectState';
import ReRenderWithSignal from './RenderingComponent/ReRenderWithSignal';
import ReRenderWithState from './RenderingComponent/ReRenderWithState';
import ReRenderWithStateOptimize from './RenderingComponent/ReRenderWithStateOptimize';
import RenderWithSignalAndInput from './RenderingInput/RenderWithSignalAndInput';
import RenderWithStateAndInput from './RenderingInput/RenderWithStateAndInput';

const Tabs = () => {

    const [currentTab, setCurrentTab] = useState('1');

    const tabs = [
        {
            id: 1,
            tabTitle: 'Create Signal',
            title: 'Create Signal',
            content: CreateSignal
        },
        {
            id: 2,
            tabTitle: 'Effect',
            title: 'Compare Effect And UseEffect',
            content: EffectSignal,
            content2: EffectState
        },
        {
            id: 3,
            tabTitle: 'Computed',
            title: 'Computed Signal',
            content: ComputedSignal
        },
        {
            id: 4,
            tabTitle: 'Batch',
            title: 'Batch Signal',
            content: BatchSignal,
        },
        {
            id: 5,
            tabTitle: 'Share Data',
            title: 'How To Share Data With Signal',
            content: CounterWithSignal,
            content2: GetCountData,
            // content3: CounterWithState,
        },
        {
            id: 6,
            tabTitle: 'Re Render Input',
            title: 'Re Render With Input',
            content: RenderWithSignalAndInput,
            content2: RenderWithStateAndInput
        },
        {
            id: 7,
            tabTitle: 'Re Render Component',
            title: 'Re Render With Component',
            content: ReRenderWithState,
            content2: ReRenderWithStateOptimize,
            content3: ReRenderWithSignal,
        },
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }
    return (
        <div className='container'>
            <div className='tabs'>
                {tabs.map((tab) =>
                    <button key={tab.id} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                )}
            </div>
            <div className='content'>
                {tabs.map((tab) =>
                    <div key={tab.id}>
                        {currentTab === `${tab.id}` && <div className='animation'>
                            <p className='title'>{tab.title}</p>
                            <div className='flex'>
                                {<tab.content />}
                                {tab.content2 && <tab.content2 />}
                                {tab.content3 && <tab.content3 />}
                            </div>
                        </div>}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Tabs;
