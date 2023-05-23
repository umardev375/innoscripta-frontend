import Modal from "../Modal/Modal";
import { SignupModal } from "./Signup";
interface Iprops {
  show: any;
  hide: any;
  state: any;
  setstate: any;
  data?: any;
  setConfirmed?: Function;
  refetch?: any;
  updateCategories?: any;
}
const Popups = ({
  show,
  hide,
  state,
  setstate,
  data,
  setConfirmed,
  refetch,
}: Iprops) => {
  console.log("state", state)
  return (
    <div>
      <Modal show={show} hide={hide} state={state} className="my-16">
        {(() => {
          switch (state) {
            case 1: {
              return (
                <SignupModal
                  setstate={setstate}
                  data={data}
                  refetch={refetch}
                />
              );
            }
            // case 2: {
            //   return <Deletenftpopup setstate={setstate} data={data} />;
            // }
            // case 3: {
            //   return <Categotypopup setConfirmed={setConfirmed} />;
            // }
            // case 4: {
            //   return (
            //     <UpdateCategotypopup
            //       setstate={setstate}
            //       data={data}
            //       updateCategories={updateCategories}
            //     />
            //   );
            // }
            // case 5: {
            //   return <ViewDescription setstate={setstate} data={data} />;
            // }
            // case 6: {
            //   return <Rejectpopup setstate={setstate} data={data} />;
            // }
            default:
              break;
          }
        })()}
      </Modal>
    </div>
  );
};

export default Popups;
