import React, { useState } from 'react';
import { Maximize2, Minimize2, FlaskConical } from 'lucide-react';
import Lab01_TopologyExplorer from './Lab01_TopologyExplorer';
import Lab02_EncapsulationStudio from './Lab02_EncapsulationStudio';
import Lab03_VrpCliTerminal from './Lab03_VrpCliTerminal';
import Lab04_SwitchMacLearningLab from './Lab04_SwitchMacLearningLab';
import Lab05_VlanTaggingLab from './Lab05_VlanTaggingLab';
import Lab06_StpElectionLab from './Lab06_StpElectionLab';
import Lab07_EthTrunkClusterLab from './Lab07_EthTrunkClusterLab';
import Lab08_SubnettingCalculator from './Lab08_SubnettingCalculator';
import Lab09_IpRoutingForwarder from './Lab09_IpRoutingForwarder';
import Lab10_OspfStateMachineLab from './Lab10_OspfStateMachineLab';
import Lab11_Ipv6NdSlaacLab from './Lab11_Ipv6NdSlaacLab';
import Lab12_InterVlanRouterLab from './Lab12_InterVlanRouterLab';

const LABS = {
  1: Lab01_TopologyExplorer,
  2: Lab02_EncapsulationStudio,
  3: Lab03_VrpCliTerminal,
  4: Lab04_SwitchMacLearningLab,
  5: Lab05_VlanTaggingLab,
  6: Lab06_StpElectionLab,
  7: Lab07_EthTrunkClusterLab,
  8: Lab08_SubnettingCalculator,
  9: Lab09_IpRoutingForwarder,
  10: Lab10_OspfStateMachineLab,
  11: Lab11_Ipv6NdSlaacLab,
  12: Lab12_InterVlanRouterLab,
};

export default function LabContainer({ moduleId, labName, labDescription }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const ActiveLabComponent = LABS[moduleId] || Lab01_TopologyExplorer;

  return (
    <>
      {/* Inline Lab Box */}
      <div className="w-full rounded-2xl border border-[#DDD3C1] dark:border-zinc-800 bg-[#FAF7F2] dark:bg-zinc-900/50 p-5 sm:p-7 shadow-sm space-y-5 my-8 relative">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#DDD3C1] dark:border-zinc-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#EAE3D5] dark:bg-zinc-800 text-[#382F24] dark:text-zinc-200 border border-[#DDD3C1] dark:border-zinc-700">
              <FlaskConical className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-[#16120D] dark:text-zinc-100 font-sans">
                  {labName || `ห้องทดลองจำลองเครือข่ายอินเทอร์แอคทีฟ (Lab ${moduleId})`}
                </h3>
                <span className="px-2 py-0.5 text-[9px] font-mono font-bold uppercase bg-[#EAE3D5] dark:bg-zinc-800 text-[#4F4335] dark:text-zinc-400 border border-[#DDD3C1] dark:border-zinc-700 rounded">
                  Simulation Studio
                </span>
              </div>
              <p className="text-xs text-[#6B5C4B] dark:text-zinc-400 mt-0.5">
                {labDescription || 'ระบบจำลองการทำงานจริงแบบเรียลไทม์ พร้อมตัวควบคุมขั้นตอนการส่งแพ็กเก็ต'}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsFullscreen(true)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#EAE3D5] hover:bg-[#DDD3C1] dark:bg-zinc-800 dark:hover:bg-zinc-700 border border-[#DDD3C1] dark:border-zinc-700 text-xs font-semibold text-[#382F24] dark:text-zinc-300 transition-all shadow-sm"
            title="ขยายเต็มจอ (Fullscreen)"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">โหมดเต็มจอ</span>
          </button>
        </div>

        {/* Lab Component */}
        <div className="w-full overflow-hidden">
          <ActiveLabComponent 
            moduleId={moduleId}
            isFullscreen={false}
            onToggleFullscreen={() => setIsFullscreen(!isFullscreen)}
          />
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-[#16120D]/80 dark:bg-zinc-950/85 backdrop-blur-md flex flex-col p-3 sm:p-6 transition-all animate-fadeIn">
          <div className="w-full max-w-6xl mx-auto flex-1 flex flex-col justify-between bg-[#FAF7F2] dark:bg-zinc-900 border border-[#DDD3C1] dark:border-zinc-800 rounded-2xl p-5 sm:p-7 shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#DDD3C1] dark:border-zinc-800 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#EAE3D5] dark:bg-zinc-800 text-[#382F24] dark:text-zinc-200 border border-[#DDD3C1] dark:border-zinc-700">
                  <FlaskConical className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-[#16120D] dark:text-zinc-100">{labName}</h2>
                  <p className="text-xs text-[#6B5C4B] dark:text-zinc-400">{labDescription}</p>
                </div>
              </div>

              <button
                onClick={() => setIsFullscreen(false)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#EAE3D5] dark:bg-zinc-800 hover:bg-[#DDD3C1] dark:hover:bg-zinc-700 text-[#382F24] dark:text-zinc-200 text-xs font-semibold border border-[#DDD3C1] dark:border-zinc-700 transition-all"
              >
                <Minimize2 className="w-3.5 h-3.5" />
                <span>ย่อขนาด (Exit)</span>
              </button>
            </div>

            <div className="flex-1 py-2">
              <ActiveLabComponent 
                moduleId={moduleId}
                isFullscreen={true}
                onToggleFullscreen={() => setIsFullscreen(false)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
